import React from 'react';
import Tittle from '../../Component/Share/Tittle/Tittle';

const AccountIssue = () => {
    return (
        <div>
            <Tittle tittle="Account-Issue" self="Account-Issue"></Tittle>
            <div class="container">
                <div class="row justify-content-center mt-5">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h3 class="card-title text-center mb-4">Account Issue</h3>
                                <form>
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required />
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="issue" class="form-label">Issue description</label>
                                        <textarea class="form-control" id="issue" rows="4" required></textarea>
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button style={{ background: "#9801c0" }} type="submit" class="btn text-white">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountIssue;