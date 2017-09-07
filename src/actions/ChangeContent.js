import CHANGE_CONTENT from '../constants/ChangeContent';

const changeContent = (name, dueTo) => {
  const hoge = {
    type: CHANGE_CONTENT,
    todo: { name, dueTo },
  };

  console.log(hoge);

  return hoge;
};

export default changeContent;
