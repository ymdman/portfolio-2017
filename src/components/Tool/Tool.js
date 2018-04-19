import React from 'react';

const Tool = () => (
  <div>
    <div className="l-content">
      <h3 className="l-content__title">Tool</h3>
      <div className="l-content__detail">
        <div className="tool">
          <ul className="tool__list">
            <li>Visual Studio Code</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>Sketch</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
          <p className="tool__text">
            愛用エディタはVisual Studio Code。<br />
            デザイナー出身のためPhotoshop / Illustratorも効率よく使えます。<br />
            バージョン管理はGitを使用。基本的なコマンドを理解しておりCLIから操作します。
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Tool;
