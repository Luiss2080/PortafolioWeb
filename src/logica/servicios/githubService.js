// Servicio para interactuar con la API de GitHub
const GITHUB_API_URL = 'https://api.github.com';
const GITHUB_USERNAME = 'Luiss2080';

/**
 * Obtiene información del perfil de usuario de GitHub
 * @returns {Promise<Object>} Datos del perfil
 */
export const obtenerPerfil = async () => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener perfil: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      nombre: data.name,
      usuario: data.login,
      bio: data.bio,
      avatar: data.avatar_url,
      ubicacion: data.location,
      seguidores: data.followers,
      siguiendo: data.following,
      repositoriosPublicos: data.public_repos,
      url: data.html_url,
      blog: data.blog,
      empresa: data.company,
      twitter: data.twitter_username,
      fechaCreacion: data.created_at
    };
  } catch (error) {
    console.error('Error al obtener perfil de GitHub:', error);
    throw error;
  }
};

/**
 * Obtiene la lista de repositorios del usuario
 * @param {Object} opciones - Opciones de filtrado
 * @returns {Promise<Array>} Lista de repositorios
 */
export const obtenerRepositorios = async (opciones = {}) => {
  try {
    const { 
      ordenar = 'updated', 
      direccion = 'desc',
      porPagina = 100,
      tipo = 'owner'
    } = opciones;
    
    const params = new URLSearchParams({
      sort: ordenar,
      direction: direccion,
      per_page: porPagina,
      type: tipo
    });
    
    const response = await fetch(
      `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?${params}`
    );
    
    if (!response.ok) {
      throw new Error(`Error al obtener repositorios: ${response.status}`);
    }
    
    const data = await response.json();
    
    return data.map(repo => ({
      id: repo.id,
      nombre: repo.name,
      nombreCompleto: repo.full_name,
      descripcion: repo.description,
      url: repo.html_url,
      urlClone: repo.clone_url,
      homepage: repo.homepage,
      lenguaje: repo.language,
      estrellas: repo.stargazers_count,
      forks: repo.forks_count,
      observadores: repo.watchers_count,
      temas: repo.topics || [],
      fechaCreacion: repo.created_at,
      fechaActualizacion: repo.updated_at,
      esPrivado: repo.private,
      esFork: repo.fork,
      licencia: repo.license?.name,
      tamaño: repo.size,
      lenguajePrincipal: repo.language
    }));
  } catch (error) {
    console.error('Error al obtener repositorios:', error);
    throw error;
  }
};

/**
 * Obtiene los lenguajes utilizados en un repositorio específico
 * @param {string} nombreRepo - Nombre del repositorio
 * @returns {Promise<Object>} Lenguajes y sus porcentajes
 */
export const obtenerLenguajesRepo = async (nombreRepo) => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${nombreRepo}/languages`
    );
    
    if (!response.ok) {
      throw new Error(`Error al obtener lenguajes: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error al obtener lenguajes del repositorio:', error);
    return {};
  }
};

/**
 * Obtiene estadísticas agregadas de todos los repositorios
 * @returns {Promise<Object>} Estadísticas generales
 */
export const obtenerEstadisticas = async () => {
  try {
    const [perfil, repositorios] = await Promise.all([
      obtenerPerfil(),
      obtenerRepositorios()
    ]);
    
    const totalEstrellas = repositorios.reduce((sum, repo) => sum + repo.estrellas, 0);
    const totalForks = repositorios.reduce((sum, repo) => sum + repo.forks, 0);
    
    // Contar lenguajes
    const lenguajes = {};
    repositorios.forEach(repo => {
      if (repo.lenguaje) {
        lenguajes[repo.lenguaje] = (lenguajes[repo.lenguaje] || 0) + 1;
      }
    });
    
    // Obtener los 5 lenguajes más usados
    const lenguajesOrdenados = Object.entries(lenguajes)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lenguaje, cantidad]) => ({ lenguaje, cantidad }));
    
    return {
      totalRepositorios: perfil.repositoriosPublicos,
      totalEstrellas,
      totalForks,
      seguidores: perfil.seguidores,
      lenguajesPrincipales: lenguajesOrdenados,
      repositorioMasEstrellado: repositorios.reduce((max, repo) => 
        repo.estrellas > (max?.estrellas || 0) ? repo : max, null
      )
    };
  } catch (error) {
    console.error('Error al obtener estadísticas:', error);
    throw error;
  }
};

/**
 * Obtiene los proyectos destacados (los más recientes con estrellas)
 * @param {number} limite - Número de proyectos a retornar
 * @returns {Promise<Array>} Lista de proyectos destacados
 */
export const obtenerProyectosDestacados = async (limite = 6) => {
  try {
    const repositorios = await obtenerRepositorios({
      ordenar: 'updated',
      direccion: 'desc'
    });
    
    // Filtrar y ordenar por relevancia (estrellas + actualización reciente)
    return repositorios
      .filter(repo => !repo.esFork && repo.descripcion) // Excluir forks sin descripción
      .sort((a, b) => {
        // Priorizar por estrellas, luego por fecha de actualización
        const scoreA = a.estrellas * 10 + new Date(a.fechaActualizacion).getTime();
        const scoreB = b.estrellas * 10 + new Date(b.fechaActualizacion).getTime();
        return scoreB - scoreA;
      })
      .slice(0, limite);
  } catch (error) {
    console.error('Error al obtener proyectos destacados:', error);
    throw error;
  }
};

/**
 * Obtiene los commits recientes de un repositorio
 * @param {string} nombreRepo - Nombre del repositorio
 * @param {number} limite - Número de commits a obtener
 * @returns {Promise<Array>} Lista de commits
 */
export const obtenerCommitsRecientes = async (nombreRepo, limite = 5) => {
  try {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${nombreRepo}/commits?per_page=${limite}`
    );
    
    if (!response.ok) {
      throw new Error(`Error al obtener commits: ${response.status}`);
    }
    
    const data = await response.json();
    return data.map(commit => ({
      sha: commit.sha,
      mensaje: commit.commit.message,
      autor: commit.commit.author.name,
      fecha: commit.commit.author.date,
      url: commit.html_url
    }));
  } catch (error) {
    console.error('Error al obtener commits:', error);
    return [];
  }
};

// Exportación por defecto con todos los métodos
const githubService = {
  obtenerPerfil,
  obtenerRepositorios,
  obtenerLenguajesRepo,
  obtenerEstadisticas,
  obtenerProyectosDestacados,
  obtenerCommitsRecientes
};

export default githubService;
