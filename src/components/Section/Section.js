import React from 'react';

const Section = props => (
  <section className="section">
    <h2 className="section__title">{props.title}</h2>
    <div className="section__detail">{props.children}</div>
  </section>
);

Section.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.element.isRequired,
};

export default Section;
