import React from "react";
import { FaPaw } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";

const Adoptheader = () => {
    return (
        <div className="mb-4">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-2">
                    <FaPaw className=" Pawicon fs-3"/>
                    <h5 className="fw-bold m-0">Adopt a Pet</h5>
                </div>
                <CgProfile className="fs-3 text-secondary" />
            </div>
            <div className="mt-3 d-flex flex-column flex-md-row align-items-center gap-3">
                <div className="flex-grow-1 w-100">
                    <div className="input-group">
                        <span className="input-group-text">
                            <IoSearch />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search pets"
                        />
                    </div>
                </div>
              
            </div>
        </div>
    );
};

export default Adoptheader;
