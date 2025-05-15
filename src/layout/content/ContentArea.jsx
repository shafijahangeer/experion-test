import React, { useState } from "react";
import MemberSteps from "../../components/member-steps/MemberSteps";
import ProductItems from "../../components/products/ProductItems";
import Tabs from "../../components/tabs/Tabs";
import Button from "../../components/button/Button";
import SectionTitle from '../../components/section-title/SectionTitle';

function ContentArea() {
    const [activeTab, setActiveTab] = useState(0);

    const tabData = [
        { label: "Sneakers", count: 6, category: "sneakers" },
        { label: "Sport Shoes", count: 2, category: "sport-shoes" },
        { label: "Sport Shoes new", count: 3, category: "sport-shoes-new" },
    ];


    return (
            <main className="main">
                <MemberSteps />
                <div className="products-wrapper">
                    <SectionTitle>Shoes</SectionTitle>
                    <Tabs
                        tabs={tabData}
                        activeTab={activeTab}
                        onChange={(index) => setActiveTab(index)}
                    />
                    <Button variant="btn-outline-secondary">View all</Button>
                    <ProductItems category={tabData[activeTab].category} />


                </div>
            </main>
    );
}
export default ContentArea;