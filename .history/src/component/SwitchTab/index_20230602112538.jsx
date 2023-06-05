import './style.css';
const SwitchTab = ({ title }) => {
    return (
        <div className="tab-container">
            <div className="tab-box">
                {title.map((item, index) => (
                    <div key={index}>213123</div>))}
            </div>


        </div>
    )
};
export default SwitchTab;