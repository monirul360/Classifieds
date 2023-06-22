import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
                        <p className='lead bg-info p-3'>
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
                                    <li><Link to="/">Dhaka</Link></li>
                                    <li><Link to="/Gazipur">Gazipur</Link></li>
                                    <li><Link to="/">Kishoreganj</Link></li>
                                    <li><Link to="/">Manikganj</Link></li>
                                    <li><Link to="/">Munshiganj</Link></li>
                                    <li><Link to="/">Narayanganj</Link></li>
                                    <li><Link to="/">Narsingdi</Link></li>
                                    <li><Link to="/">Tangail</Link></li>
                                    <li><Link to="/">Faridpur</Link></li>
                                    <li><Link to="/">Gopalganj</Link></li>
                                    <li><Link to="/">Madaripur</Link></li>
                                    <li><Link to="/">Rajbari</Link></li>
                                    <li><Link to="/">Shariatpur</Link></li>
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
                                    <li><Link to="/">Rajshahi</Link></li>
                                    <li><Link to="/">Natore</Link></li>
                                    <li><Link to="/">Sirajganj</Link></li>
                                    <li><Link to="/">Pabna</Link></li>
                                    <li><Link to="/">Bogura</Link></li>
                                    <li><Link to="/">Chapainawabganj</Link></li>
                                    <li><Link to="/">Naogaon</Link></li>
                                    <li><Link to="/">Joypurhat</Link></li>
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
                                    <li><Link to="/">Rangpur</Link></li>
                                    <li><Link to="/">Dinajpur</Link></li>
                                    <li><Link to="/">Kurigram</Link></li>
                                    <li><Link to="/">Gaibandha</Link></li>
                                    <li><Link to="/">Lalmonirhat</Link></li>
                                    <li><Link to="/">Nilphamari</Link></li>
                                    <li><Link to="/">Panchagarh</Link></li>
                                    <li><Link to="/">Thakurgaon</Link></li>
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
                                    <li><Link to="/">Khulna</Link></li>
                                    <li><Link to="/">Bagerhat</Link></li>
                                    <li><Link to="/">Chuadanga</Link></li>
                                    <li><Link to="/">Jashore</Link></li>
                                    <li><Link to="/">Jhenaidah</Link></li>
                                    <li><Link to="/">Kushtia</Link></li>
                                    <li><Link to="/">Magura</Link></li>
                                    <li><Link to="/">Meherpur</Link></li>
                                    <li><Link to="/">Narail</Link></li>
                                    <li><Link to="/">Satkhira</Link></li>
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
                                    <li><Link to="/">Barisal</Link></li>
                                    <li><Link to="/">Barguna</Link></li>
                                    <li><Link to="/">Bhola</Link></li>
                                    <li><Link to="/">Jhalokati</Link></li>
                                    <li><Link to="/">Patuakhali</Link></li>
                                    <li><Link to="/">Pirojpur</Link></li>

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
                                    <li><Link to="/">Chittagong</Link></li>
                                    <li><Link to="/">Brahmanbaria</Link></li>
                                    <li><Link to="/">Comilla</Link></li>
                                    <li><Link to="/">Chandpur</Link></li>
                                    <li><Link to="/">Lakshmipur</Link></li>
                                    <li><Link to="/">Noakhali</Link></li>
                                    <li><Link to="/">Feni</Link></li>
                                    <li><Link to="/">Khagrachhari</Link></li>
                                    <li><Link to="/">Rangamati</Link></li>
                                    <li><Link to="/">Bandarban</Link></li>
                                    <li><Link to="/">Cox's Bazar</Link></li>

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
                                    <li><Link to="/">Sylhet</Link></li>
                                    <li><Link to="/">Habiganj</Link></li>
                                    <li><Link to="/">Moulvibazar</Link></li>
                                    <li><Link to="/">Sunamganj</Link></li>

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
                                    <li><Link to="/">Mymensingh</Link></li>
                                    <li><Link to="/">Jamalpur</Link></li>
                                    <li><Link to="/">Netrokona</Link></li>
                                    <li><Link to="/">Sherpur</Link></li>

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