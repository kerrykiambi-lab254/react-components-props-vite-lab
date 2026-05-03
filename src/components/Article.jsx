import PropTypes from 'prop-types';

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadTime = (minutes) => {
    if (minutes < 30) {
      const cups = Math.ceil(minutes / 5);
      return "☕️".repeat(cups) + ` ${minutes} min read`;
    } else {
      const bento = Math.ceil(minutes / 10);
      return "🍱".repeat(bento) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {getReadTime(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  preview: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
};

export default Article;