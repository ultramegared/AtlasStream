class BaseModel {
  constructor(data = {}) {
    Object.assign(this, data);
  }
}

module.exports = BaseModel;