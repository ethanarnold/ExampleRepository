import axios from 'axios'

const githubDiscussions = {
  async fetchDiscussions(repositoryOwner, repositoryName, category) {
    const response = await axios.get(`/repos/${repositoryOwner}/${repositoryName}/discussions`, {
      params: {
        category: category,
      },
    })
    return response.data
  },
}

export default githubDiscussions
