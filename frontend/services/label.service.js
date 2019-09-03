import ApiService from '@/services/api.service'

class LabelService {
  constructor() {
    this.request = new ApiService()
  }

  getLabelList(projectId) {
    return this.request.get(`/projects/${projectId}/labels`)
  }

  addLabel(projectId, payload) {
    return this.request.post(`/projects/${projectId}/labels`, payload)
  }

  deleteLabel(projectId, labelId) {
    return this.request.delete(`/projects/${projectId}/labels/${labelId}`)
  }

  updateLabel(projectId, labelId, payload) {
    const data = {
      id: labelId,
      ...payload
    }
    return this.request.patch(`/projects/${projectId}/labels/${labelId}`, data)
  }
}

export default new LabelService()
