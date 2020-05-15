class Tag {
    constructor (client) {
      this.client = client
    }
  
    get (tagId) {
      return this.client.get(`tags/${tagId}`)
    }
  
    list (data = {}) {
      return this.client.get('tags', data)
    }
  
    create (tag) {
      return this.client.post('tags/new', tag)
    }
  
    edit (tagId, tag) {
      return this.client.patch(`tags/${tagId}/edit`, tag)
    }
  
    delete (tagId, tag) {
      return this.client.put(`tags/${tagId}/edit`, tag)
    }
  }
  
  module.exports = Tag