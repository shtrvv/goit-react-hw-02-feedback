import FeedbackOptions from "./FeedbackOptions/FeedbackOptions"
import Statistics from "./Statistics/Statistics"
import Section from "./Section/Section"
import Notification from "./Notification/Notification"
import { Component } from "react"

class App extends Component {
    state = {
    good: 0,
    neutral: 0,
    bad: 0
    }

    incrementValue = (e) => {
        const key = e.target.name
        this.setState((prev) => ({
            [key]: prev[key] + 1,
        }))
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }

    render() {
        const total = this.countTotalFeedback();
        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={Object.keys(this.state)}
                        onLeaveFeedback={this.incrementValue}
                    />
                </Section>
                <Section title="Statistics">
                    {total ? <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    /> :
                        <Notification message="There is no feedback" />}
                </Section>
            </>
        )
    }
}

export default App