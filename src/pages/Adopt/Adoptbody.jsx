import React from "react";

const Adoptbody = () => {
    const pets = [
        { name: "Leo", age: "3 months", gender: "Male", img: "/dog1.jpeg" },
        { name: "Max", age: "2 years", gender: "Male", img: "/dog2.jpeg" },
        {
            name: "Lily & Luna",
            age: "7 months",
            gender: "Females",
            img: "/cat1.jpeg",
        },
        { name: "Muffin", age: "1 year", gender: "Male", img: "/cat2.jpeg" },
        {
            name: "Bunny",
            age: "8 months",
            gender: "Female",
            img: "/rabbit1.jpeg",
        },
        {
            name: "Peanut",
            age: "10 months",
            gender: "Male",
            img: "/rabbit2.jpeg",
        },
        { name: "Robin", age: "3 months", gender: "Male", img: "/bird1.jpeg" },
        { name: "Buddy", age: "5 months", gender: "Male", img: "/bird2.jpeg" },
        {
            name: "Shelly",
            age: "2 years",
            gender: "Female",
            img: "/turtle1.jpeg",
        },
        { name: "Olive", age: "3 years", gender: "Male", img: "/turtle2.jpeg" },
        { name: "Star", age: "4 years", gender: "Female", img: "/horse1.jpg" },
        { name: "Blaze", age: "5 years", gender: "Male", img: "/horse2.jpg" },
    ];

    return (
        <div className="row g-4">
            {pets.map((pet, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                    <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
                        <img
                            src={pet.img}
                            className="card-img-top"
                            alt={pet.name}
                            style={{ height: "220px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            <div className="fs-6">
                                <div className="d-flex justify-content-between">
                                    <p className="m-0 fw-semibold">Name:</p>
                                    <p className="m-0">{pet.name}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="m-0 fw-semibold">Age:</p>
                                    <p className="m-0">{pet.age}</p>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p className="m-0 fw-semibold">Gender:</p>
                                    <p className="m-0">{pet.gender}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Adoptbody;
