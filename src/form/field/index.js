import Button from './button/button-component.js';
import Text from './text/text-component.js';
import {
  addPublishers as _addPublishers,
  addSubscribers as _addSubscribers
} from './decorator';

export const addPublishers = _addPublishers;
export const addSubscribers = _addSubscribers;

export const fieldLibrary = {
  button: Button,
  text: Text
};

export default fieldLibrary;
