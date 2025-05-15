import React from "react";
import Img from "../img/Img";
import Icon from "../Icon";
import Button from "../button/Button";
function MembershipCard() {
    const benefits = [
        {
            title: "Member Only Discounts",
            description: "Save on every purchase! Enjoy special prices on a wide range of product categories",
        },
         {
            title: "Priority Support",
            description: "Get all your queries resolved on a priority basis, only for TriBe members",
        },
         {
            title: "Early Access to Collections",
            description: "Grab the latest products and exclusive collections before everyone else",
        },


    ];

    return (
        <aside className="membership-card">
            <h2 className="title">Get the Membership &
                Never Pay Full Price Again</h2>
            <div className="membership-card__wrapper">
                <div className="membership-card__wrapper__image">
                    <Img src={'../assets/images/membership-bg.png'} alt={'illustration of memebership card'} />
                </div>
                <div className="membership-card__wrapper__box">
                    <h3 className="membership-card__wrapper__box__title">Benefits</h3>
                    <div className="membership-card__wrapper__box__info-container">
                        {benefits.map((benefit, index) => (

                            <div key={index} className="membership-card__wrapper__box__info-box">
                                <Icon name={'star-fill'} />
                                <div className="">
                                    <h4 className="membership-card__wrapper__box__info-title">{benefit.title}</h4>
                                    <p className="membership-card__wrapper__box__info-description">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Button variant="btn-noFill-secondary">Learn More</Button>
                </div>
            </div>
        </aside>
    );
}
export default MembershipCard;