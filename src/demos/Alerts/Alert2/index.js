import React, { Component } from "react";
import cx from "classnames";
import css from "./alert2.module.scss";

class Alert2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: [],
      counter: 0,
      dismissing: null
    };
  }

  addAlert = (name, icon, message) => {
    return () => {
      const { autoDismiss } = this.props;

      //  Add new alert
      this.setState(state => ({
        alerts: [...state.alerts, { name, icon, message }],
        counter: state.counter + 1
      }));
      //  Dismiss alert automatically after designated time
      if (autoDismiss) {
        setTimeout(() => {
          this.dismissAlert(name);
        }, autoDismiss);
      }
    };
  };

  dismissAlert = name => {
    return () => {
      //  Mark alert as 'dismissing' so animation can run
      this.setState({ dismissing: name });
      //  After animation hides the alert, remove it from state
      setTimeout(() => {
        this.setState(state => ({
          alerts: state.alerts.filter(alert => alert.name !== name)
        }));
      }, 100);
    };
  };

  render() {
    const { buttonLabel } = this.props;
    const { alerts, counter, dismissing } = this.state;

    return (
      <div className={css.alertDemo}>
        <button
          className={css.alertButton}
          onClick={this.addAlert(
            `alert-${counter}`,
            "alert-circle-o",
            "This is an alert!"
          )}
        >
          {buttonLabel}
        </button>
        <div className={css.alertOverlay}>
          {alerts.map((alert, i) => (
            <div
              key={alert.name}
              className={cx(
                css.alert,
                dismissing === alert.name ? css.dismiss : null
              )}
              onClick={this.dismissAlert(alert.name)}
              style={{
                bottom: `${(alerts.length - 1) * 48 - i * 48}px`,
                transitionDelay: `${(alerts.length - 1 - i) * 0.025}s`
              }}
            >
              <i class={cx(css.alertIcon, `zmdi zmdi-${alert.icon}`)} />
              <span className={css.alertMessage}>{alert.message}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Alert2;
