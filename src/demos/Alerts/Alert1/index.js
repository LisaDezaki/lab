import React, { Component } from "react";
import cx from "classnames";
import css from "./alert1.module.scss";

class Alert1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alerts: [],
      counter: 0,
      dismissing: null,
      expanding: null
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
      //  Expand alert on first appearance (allowing time to animate in)
      setTimeout(() => {
        this.setState({ expanding: name });
      }, 250);
      //  Collapse alert after 3s
      setTimeout(() => {
        this.setState({ expanding: null });
      }, 3000);
      //  Dismiss alert automatically after 20s
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
      }, 500);
    };
  };

  render() {
    const { buttonLabel } = this.props;
    const { alerts, counter, dismissing, expanding } = this.state;
    const paddingBottom = `calc(100vh - ${alerts.length * 48}px)`;

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
        <div className={css.alertOverlay} style={{ paddingBottom }}>
          {alerts.map((alert, i) => (
            <div
              key={alert.name}
              className={cx(
                css.alert,
                dismissing === alert.name ? css.dismiss : null,
                expanding === alert.name ? css.expand : null
              )}
              onClick={this.dismissAlert(alert.name)}
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

export default Alert1;
