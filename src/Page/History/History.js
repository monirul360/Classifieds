import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';

const History = () => {
    return (
        <div>
            <Tittle tittle="History" self="History"></Tittle>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title text-center mb-4">Your History</h3>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Event</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>2023-06-01</td>
                                            <td>Logged in</td>
                                            <td><span class="badge bg-success">Success</span></td>
                                        </tr>
                                        <tr>
                                            <td>2023-05-29</td>
                                            <td>Updated profile information</td>
                                            <td><span class="badge bg-success">Success</span></td>
                                        </tr>
                                        <tr>
                                            <td>2023-05-25</td>
                                            <td>Failed login attempt</td>
                                            <td><span class="badge bg-danger">Failed</span></td>
                                        </tr>
                                        {/* Add more rows as needed  */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;