import {useEffect, useState} from "react";
import UsersData from "../config/UsersData";
import UserModel from "../model/User.model";
import _ from "lodash";



export default function About() {


    const [users, setUsers] = useState<UserModel[]>([]);


    useEffect(() => {

        setUsers(_.shuffle(UsersData) as UserModel[]);
    },[]);

    return (

        <>
            <div className={'container aboutContainer'}>
                <div className={'row'}>
                    <div className={'col-12 align-items-stretch'}>
                        <div className="card">
                            {/*<img*/}
                            {/*    src={process.env.PUBLIC_URL+'/img/nasachallenge.png'}*/}
                            {/*    className="card-img-top" alt="..."/>*/}
                            <div className="card-body">
                                <h3 className="card-title mb-4">About Us</h3>

                                {users.map((user: UserModel, index: number) => {
                                    return (
                                        <div key={'index_user_' + index.toString()} className='row mb-5'>
                                            <div className='col-12 col-lg-3 d-flex justify-content-center align-items-center'>
                                                <img src={process.env.PUBLIC_URL + '/img/users/' + user.image}
                                                     alt="Avatar"
                                                     className="avatar"
                                                />
                                            </div>
                                            <div className='col-12 col-lg-9'>

                                                <h5 className="card-title">{user.name}</h5>
                                                {user.description.map((desc: string, index2: number) => {
                                                    return (
                                                        <p key={index2} className="card-text">
                                                            {desc}
                                                        </p>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}