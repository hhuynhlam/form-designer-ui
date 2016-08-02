import _ from 'lodash';

export const addPublishers = (field, nextProps, updateState) => {
  const guidPattern = /(\w|\n){32,}/i;
  const publishers = {};

  if (field.publish) {
    _.forIn(field.publish, (body, topic) => {
      publishers[topic] = (event) => {
        let value = body.value;

        if (body.value === 'self') {
          value = event.target.value;
        } else if (guidPattern.test(body.value)) {
          value = nextProps.data[body.value];
        }

        event.preventDefault();
        updateState(`data.${body.state}`, value);
      };
    });
  }

  _.assign(field, publishers);
};

export const addSubscribers = (field, props) => {
  const subscribers = {};

  if (field.subscribe) {
    _.forIn(field.subscribe, (body, topic) => {
      subscribers[topic] = _.get(props, `data.${body}`);
    });
  }

  _.assign(field, subscribers);
};
