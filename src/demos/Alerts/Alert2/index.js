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
          this.dismissAlert(name)();
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

  generateAlert = () => {
    const { counter } = this.state;
    const alertMessages = [
      "You did it! This is an alert!",
      "This is getting out of hand. Now there are two of them!",
      "Okay, you get it. Alerts pop up. That's it. That's the whole thing.",
      "We're done, there aren't any new messages hidden here.",
      "That was the last one. I promise.",
      "You just couldn't stay away could you?",
      "You should talk to someone about your compulsive need to keep clicking useless buttons.",
      "I'm bored of typing these so I'm going to loop now.",
    ];
    const secretMessages = [
      "Oh, wow, you're a real achievement hunter, aren't ya?",
      "Congratulations, you did it. You found my secret message.",
      "Hope it was worth it.",
      "The funniest part is that you don't know if there's another hidden message 9000 alerts deep.",
      "There's only one way to find out ;)"
    ]

    let alertIcon = "alert-circle-o";
    let alertMessage = alertMessages[counter % alertMessages.length];
    
    let secretMessagesLoopAfter = 3;
    let secretMessagesBegin = alertMessages.length * secretMessagesLoopAfter;
    let secretMessagesEnd = secretMessagesBegin + secretMessages.length;

    if (counter >= secretMessagesBegin && counter < secretMessagesEnd) {
      alertIcon = "alert-triangle";
      alertMessage = secretMessages[counter - secretMessagesBegin];
    }

    if (counter >= secretMessagesEnd) {
      alertMessage = alertMessages[(counter - secretMessagesEnd) % alertMessages.length];
    }

    if (counter === 9000 ) {
      alertMessage = "Oh my god I hope you found this by searching my code on Github!";
    }
    
    return this.addAlert(`alert-${counter}`, alertIcon, alertMessage);
  };

  render() {
    const { buttonLabel } = this.props;
    const { alerts, dismissing } = this.state;

    return (
      <div className={css.alertDemo}>
        <button
          className={css.alertButton}
          onClick={this.generateAlert()}
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
              <i className={cx(css.alertIcon, `zmdi zmdi-${alert.icon}`)} />
              <span className={css.alertMessage}>{alert.message}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Alert2;
