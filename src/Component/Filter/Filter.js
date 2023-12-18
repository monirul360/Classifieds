import React, { useState } from 'react';
import DhakaDivision from '../All of Bangladesh/DhakaDev/DhakaDivision/DhakaDivision';
import RajshahiDivision from '../All of Bangladesh/RajshahiDivision/RajshahiDivision';
import RangpurDivision from '../All of Bangladesh/RangpurDivision/RangpurDivision';
import KhulnaDivision from '../All of Bangladesh/KhulnaDivision/KhulnaDivision';
import BarisalDivision from '../All of Bangladesh/BarisalDivision/BarisalDivision';
import ChittagongDivison from '../All of Bangladesh/ChittagongDivison/ChittagongDivison';
import SylhetDivision from '../All of Bangladesh/SylhetDivision/SylhetDivision';
import MymensingDivision from '../All of Bangladesh/MymensinghDivision/MymensingDivision';

const Filter = () => {
    const [dhaka, setdhaka] = useState(true);
    const [rajshahi, setRajshahi] = useState(false);
    const [Rangpur, setRangpur] = useState(false);
    const [Khulna, setKhulna] = useState(false);
    const [Barisal, setBarisal] = useState(false);
    const [Chittagong, setChittagong] = useState(false);
    const [Sylhet, setSylhet] = useState(false);
    const [Mymensingh, setMymensingh] = useState(false);

    return (
        <div>
            <div className="row filter-item my-4 py-3">
                <div className="col-md-12">
                    <div>
                        <p className='lead bg-info text-white p-3'>
                            All of Bangladesh
                        </p>
                        {/* dhaka-divi start */}
                        <div className="dhaka-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setdhaka(!dhaka)}
                            >
                                <div className="name">
                                    <h3>Dhaka Division</h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${dhaka ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <DhakaDivision></DhakaDivision>
                                </ul>
                            </div>
                        </div>
                        {/* dhaka divi end */}
                        {/* Rajshahi divi start */}
                        <div className="Rajshahi-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setRajshahi(!rajshahi)}
                            >
                                <div className="name">
                                    <h3>Rajshahi Division
                                    </h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${rajshahi ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <RajshahiDivision></RajshahiDivision>
                                </ul>
                            </div>
                        </div>
                        {/* Rajshahi divi end */}
                        {/* Rangpur  divi start */}
                        <div className="Rajshahi-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setRangpur(!Rangpur)}
                            >
                                <div className="name">
                                    <h3>Rangpur Division
                                    </h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${Rangpur ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <RangpurDivision></RangpurDivision>
                                </ul>
                            </div>
                        </div>
                        {/* Rangpur divi end */}
                        {/* Khulna  divi start */}
                        <div className="Khulna-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setKhulna(!Khulna)}
                            >
                                <div className="name">
                                    <h3>Khulna Division

                                    </h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${Khulna ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <KhulnaDivision></KhulnaDivision>
                                </ul>
                            </div>
                        </div>
                        {/* Khulna divi end */}


                        {/* Barisal divi start */}
                        <div className="Barisal-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setBarisal(!Barisal)}
                            >
                                <div className="name">
                                    <h3>Barisal Division </h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${Barisal ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <BarisalDivision></BarisalDivision>
                                </ul>
                            </div>
                        </div>
                        {/* Barisal divi end */}

                        {/* Chittagong  divi start */}
                        <div className="Chittagong-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setChittagong(!Chittagong)}
                            >
                                <div className="name">
                                    <h3>Chittagong Division

                                    </h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${Chittagong ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <ChittagongDivison></ChittagongDivison>
                                </ul>
                            </div>
                        </div>
                        {/* Chittagong divi end */}

                        {/* Sylhet divi start */}
                        <div className="Sylhet-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setSylhet(!Sylhet)}
                            >
                                <div className="name">
                                    <h3>Sylhet Division</h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${Sylhet ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <SylhetDivision></SylhetDivision>
                                </ul>
                            </div>
                        </div>
                        {/* Sylhet divi end */}

                        {/* Mymensingh divi start */}
                        <div className="Mymensingh-divi shadow-lg division">
                            <div className="d-flex align-items-center"
                                onClick={() => setMymensingh(!Mymensingh)}
                            >
                                <div className="name">
                                    <h3>Mymensingh Division

                                    </h3>
                                </div>
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                                        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`${Mymensingh ? "menu" : "c4c4c4c4c4c4c4c"}`}>
                                <ul>
                                    <MymensingDivision></MymensingDivision>
                                </ul>
                            </div>
                        </div>
                        {/* Mymensingh divi end */}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Filter;