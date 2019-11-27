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
      //  Expand this specific alert on first appearance (allowing time to animate in)
      setTimeout(() => {
        this.setState(state => ({
          alerts: state.alerts.map(alert => ({
            ...alert,
            expanding: alert.name === name ? true : alert.expanding
          }))
        }));
      }, 250);
      //  Collapse this specific alert after 3s
      setTimeout(() => {
        this.setState(state => ({
          alerts: state.alerts.map(alert => ({
            ...alert,
            expanding: alert.name === name ? false : alert.expanding
          }))
        }));
      }, 3000);
      //  Dismiss this specific alert automatically after designated time
      if (autoDismiss) {
        setTimeout(() => {
          this.dismissAlert(name)();
        }, autoDismiss);
      }
    };
  };

  dismissAlert = name => {
    return () => {
      //  Mark this specific alert as 'dismissing' so the animation can run
      this.setState(state => ({
        alerts: state.alerts.map(alert => {
          alert.dismissing = alert.name === name;
          return alert;
        })
      }));
      //  After animation hides this alert, remove it from state
      setTimeout(() => {
        this.setState(state => ({
          alerts: state.alerts.filter(alert => alert.name !== name)
        }));
      }, 500);
    };
  };

  generateAlert = () => {
    const { counter } = this.state;
    const alertMessages = [
      "Hey, stop pressing that.",
      "Well don't click it again! Why would you do that?",
      "Okay, fine. Click it all you want.",
      "I don't even care",
      "I'm serious. It's fine. I'm fine. It's fine.",
      "It's not even bothering me.",
      "I can do this all day. I'm just a simple array of strings. How long have you got?",
      "...",
      ".....",
      "..........",
      "Try the other alert button at least, would you? That one's way more fun."
    ];
    let alertMessage = alertMessages[counter % alertMessages.length];
    return this.addAlert(`alert-${counter}`, "alert-circle-o", alertMessage);
  };

  render() {
    const { buttonLabel } = this.props;
    const { alerts, counter } = this.state;
    const paddingBottom = `calc(100vh - ${alerts.length * 48}px)`;

    return (
      <div className={css.alertDemo}>
        <button
          className={css.alertButton}
          onClick={this.generateAlert()}
        >
          {buttonLabel}
        </button>
        <div className={css.alertOverlay} style={{ paddingBottom }}>
          {alerts.map((alert, i) => (
            <div
              key={alert.name}
              className={cx(
                css.alert,
                alert.dismissing ? css.dismiss : null,
                alert.expanding ? css.expand : null
              )}
              onClick={this.dismissAlert(alert.name)}
              style={{ zIndex: alerts.length - i }}
            >
              <i className={cx(css.alertIcon, `zmdi zmdi-${alert.icon}`)} />
              <span className={css.alertMessage}>{alert.message}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Alert1;
