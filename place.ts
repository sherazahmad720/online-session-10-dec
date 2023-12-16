export let places = [
    {
        "Name": "Azad Kashmir",
        "Description": "Azad Kashmir is the southernmost political entity within the Pakistani-administered part of the former princely state of Jammu and Kashmir. It borders the present-day Indian-administered state of Jammu and Kashmir to the east (separated from it by the Line of Control), Khyber Pakhtunkhwa to the west, Gilgit-Baltistan to the north, and the Punjab Province of Pakistan to the south.",

    },
    {
        "Name": "Gilgit Baltistan",
        "Description": "Gilgit-Baltistan, formerly known as the Northern Areas, is the northernmost territory administered by Pakistan. It borders Azad Kashmir to the south, the province of Khyber Pakhtunkhwa to the west, the Wakhan Corridor of Afghanistan to the north, the Xinjiang region of China, to the east and northeast, and the Indian-administered state of Jammu and Kashmir to the southeast.",
    },
];

interface placeInterface {
    Name: string;
    Description?: string;
}


interface TourInterface extends placeInterface {
    startDate: string;
    endDate: string;
    startLocation: string;
    endLocation: string;
    price: number;
};

interface teacherInterface {
    Name: string;
    designation: string;
    salary: number;


}
interface studentInterface {
    Name: string;
    rollNo: number;
    batch: string;
}
type userType = teacherInterface | studentInterface;
type userType2 = teacherInterface & studentInterface;
let user1: userType2 = {
    Name: "abc",
    designation: "abc",
    salary: 10000,
    rollNo: 123,
    batch: "abc",
}

// type myOwnType = string | number | undefined | TourInterface;
// let abc: myOwnType = {
//     Name: "abc",
//     Description: "abc",
//     startDate: "2019-01-01",
//     endDate: "2019-01-02",
//     startLocation: "Islamabad",
//     endLocation: "Islamabad",
//     price: 10000,
// }




let myTourList: TourInterface = {
    startDate: "2019-01-01",
    endDate: "2019-01-02",
    startLocation: "Islamabad",
    endLocation: "Islamabad",
    price: 10000,
    Name: "Azad Kashmir",


}



console.table(myTourList);

let places2;
// export default places;
