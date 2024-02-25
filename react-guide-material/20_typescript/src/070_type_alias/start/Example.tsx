import {type} from "os";

const Example = () => {
  type Usre = {
      name: string,
      age: number
  }

  const user: Usre = {name: "Taro", age: 10}

    type UserName = string;
    type UserAge = number;
    type UserGender = "man" | "woman" | "others";

    type UserProfile = {
        name: UserName,
        age: UserAge,
        gender: UserGender,
    }

    const userProfile: UserProfile = {
        name : "kazuma",
        age: 27,
        gender: "man"
    }
};

export default Example;
