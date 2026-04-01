// utils/noticeHelper.js

const Notice = require('../models/Notice');

const createNoticeHelper = async (title, description) => {
  const notice = new Notice({
    title,
    description
  });

  return await notice.save();
};

module.exports = {
  createNoticeHelper
};