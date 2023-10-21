import "./styles.css"
const UserInfo = (props) => {
    const {name,Age,phone}=props ;
    return (
        <div className="UserInfo">
        <ul>
          <li className="UserName">name:{name}</li>
          <li>Age: {Age}</li>
          <li>phone :{phone} </li>
        </ul>
      </div>
    );
}
export default UserInfo;