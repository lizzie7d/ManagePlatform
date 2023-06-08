import ContentBox from "../../component/ContentBox";
import './style.css';
import company from '../../assets/company-pic.png';
const CompanyManage = () => {
    return (
        <div className="company-container">
            <div className="content-left">

            </div>
            <div className="content-right">
                <ContentBox
                    title={"主要示范地"}
                    picText={[
                        { title: '主要示范地', pic: company },
                        { title: '主要示范地', pic: company },
                        { title: '主要示范地', pic: company },
                        { title: '主要示范地', pic: company },
                        { title: '主要示范地', pic: company },
                    ]}
                />
            </div>
        </div>
    )
}
export default CompanyManage;