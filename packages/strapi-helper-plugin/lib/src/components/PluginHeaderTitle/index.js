/**
*
* PluginHeaderTitle
*
*/

import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './styles.scss';

class PluginHeaderTitle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <h1 className={styles.pluginHeaderTitleName}>
          <FormattedMessage {...this.props.title} defaultMessage={this.props.title.id} />
        </h1>
        <p className={styles.pluginHeaderTitleDescription}>
          <FormattedMessage {...this.props.description} />
        </p>
      </div>
    );
  }
}

PluginHeaderTitle.propTypes = {
  description: React.PropTypes.object.isRequired,
  title: React.PropTypes.object.isRequired,
};

export default PluginHeaderTitle;
