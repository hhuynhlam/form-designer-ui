# ES6 Style Guide

## Table of Contents

  1. [Import Rules](#import-rules)

## Import Rules
* Order of imports (follow by line break):
  1. Default imports from `global` modules.
  1. Named imports from `global` modules.
  1. Default imports from `local` modules.
  1. Named imports from `local` modules.
  1. React Components

  ```js
  import React from 'react';

  import { connect } from 'react-redux';

  import actions from '../action/login-action';
  import nav from '../../navbar';

  import Button from '../../common/button/button-component.jsx';
  ```
