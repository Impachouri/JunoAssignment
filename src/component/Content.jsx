import { useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import CloseAccount from './CloseAccount';
import { TabData, TabHeadings } from './Data';
import Table from './Table';
import './content.css';
import '../App.css';
import { OrderBy, SerachIcon } from './Icons';


const tabs = [
    { id: 'tab1', label: 'Pending' },
    { id: 'tab2', label: 'Completed' },
];

function Content() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [searchQuery, setSearchQuery] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="conatiner">
            <div className="page-heading">
                <span className="heading">Monitoring</span>
            </div>
            <div className="tab-switch">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => handleTabClick(tab.id)}
                        className={`switch-button ${activeTab === tab.id ? "active" : ""}`}
                    >
                        <div className="tab">
                            <span className="tab-heading">
                                {tab.label}
                            </span>
                            {activeTab === tab.id && <div className="underline"></div>}
                        </div>
                    </button>
                ))}
                <div className="border-bottom"></div>
                <div className="close-account">
                    <button className="close-account-button" onClick={openModal}>
                        <AiOutlineCloseCircle className="close-icon" />
                        <span className="close-text">Close Account</span>
                    </button>
                </div>
                <CloseAccount isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} />
            </div>
            <div className="filtering">
                <div className="search-bar">
                    <SerachIcon />
                    <input
                        type="text"
                        placeholder='Search'
                        name='search'
                        value={searchQuery}
                        onChange={handleSearchQueryChange}
                    />
                </div>
                <div className="filter">
                    <button>
                        <span>Trigger reason</span>
                        <OrderBy />
                    </button>
                    <button>
                        <span>Risk level</span>
                        <OrderBy />
                    </button>
                </div>
                <div className="trigger-reason">

                </div>
                <div className="risk-level">

                </div>
            </div>
            <div >
                <Table headings={TabHeadings[activeTab]} data={TabData[activeTab]} />
            </div>
        </div>
    );
}

export default Content;











