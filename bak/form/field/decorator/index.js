import _ from 'lodash';

export const addPublishers = (field, nextProps, updateState) => {
  const guidPattern = /(\w|\n){32,}/i;
  const publishers = {};

  if (field.publish) {
    _.forIn(field.publish, (body, topic) => {
      publishers[topic] = (...args) => {
        let value = body.value;
        let event;

        args.forEach((arg) => {
          if (arg) {
            event = arg;
          }
        });

        if (event && body.value === 'self') {
          value = _.get(event, 'target.value') || event;
        } else if (guidPattern.test(body.value)) {
          value = nextProps.data[body.value];
        }

        if (event.preventDefault) {
          event.preventDefault();
        }

        updateState(`data.${body.state}`, value);
      };
    });

    delete(field.publish);
  }

  _.assign(field, publishers);
};

export const addSubscribers = (field, props) => {
  const subscribers = {};

  if (field.subscribe) {
    _.forIn(field.subscribe, (body, topic) => {
      subscribers[topic] = _.get(props, `data.${body}`);
    });

    delete(field.subscribe);
  }

  _.assign(field, subscribers);
};
