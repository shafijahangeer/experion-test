import React from "react";
import Icon from "../Icon";
function MemberSteps() {
    const steps = [
        { icon: "login", text: "Login or Signup" },
        { icon: "membership-profile", text: "Membership in Profile" },
        { icon: "subscription", text: "Select a Subsciption" },
        { icon: "payment", text: "Pay the Bill" },
        { icon: "get-membership", text: "Get the Membership" },

    ];
    return (
        <section className="member-steps">
            <h2 className="title">How to be a member</h2>
            <div className="member-steps__container">
                {steps.map((step, index) => (
                    <div

                        className="member-steps__container__wrapper"
                    >
                        <div key={index} className={`member-steps__container__wrapper__item ${index === steps.length - 1 ? "no-arrow" : ""}`} >
                            <Icon name={step.icon} />
                        </div>
                        <p className="member-steps__container__wrapper__info">{step.text}</p>
                    </div>
                ))}

            </div>
        </section>
    );
}
export default MemberSteps;