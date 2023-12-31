import React, { useEffect } from "react";
import Avatar from "react-avatar";
import { avatarRandomColor } from "../../utils/avatar-color/avatar";
import { navigation } from "../../const/navigation";
import { BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { selectDisplay } from "../../slices/displaySelectorSlice";
import { useSelector } from "react-redux";

const SideMenu = () => {
  const dispatch = useDispatch();
  const avatar = useSelector((state) => state.previewProfilePic.image);
  const user = useSelector((state) => state.userAuth.user);
  const fullname = user[0]?.data?.fname + " " + user[0]?.data?.lname;

  function handleSelectedMenu(e, id) {
    e.preventDefault();
    dispatch(selectDisplay(id));
  }

  return (
    <aside className="w-[300px] bg-slate-100 ring-1 ring-slate-300 sticky left-0 top-[50px]">
      <div className="h-[93vh] flex flex-col justify-between items-center pb-4 pt-7">
        <section className="w-full flex flex-col justify-center items-center font-poppins">
          {/* <div className="w-36 h-36 bg-white rounded-full ring-1 ring-slate-300 overflow-hidden flex justify-center items-center">
            <img
              src={avatar}
              alt={!avatar ? "JA" : ""}
              className="object-cover object-center"
            />
          </div> */}
          <Avatar
            // color={Avatar.getRandomColor("sitebase", ['red', 'blue', 'green', 'indigo'])}
            name={fullname}
            round={true}
            size={100}
          />
          <p className="text-[17px] pt-2">Hi, {user[0]?.data?.fname}</p>
          <p className="text-[12px] text-gray-600 pb-8">
            {user[0]?.data?.email}
          </p>
          <ul className="flex flex-col text-center space-y-2">
            {navigation.map((items) => {
              return (
                <li
                  key={items.id}
                  className={`px-16 py-2 cursor-pointer hover:ring-1 ring-slate-300 rounded `}
                  onClick={(e) => handleSelectedMenu(e, items.id)}
                >
                  {items.name}
                </li>
              );
            })}
          </ul>
        </section>
        <div className="flex justify-center items-center space-x-2">
          <span className="text-[#4A55A2] cursor-pointer hover:scale-110 duration-300">
            <BsFacebook size={20} />
          </span>
          <span className="text-[#4A55A2] cursor-pointer hover:scale-110 duration-300">
            <BsTwitter size={20} />
          </span>
          <span className="text-[#4A55A2] cursor-pointer hover:scale-110 duration-300">
            <BsLinkedin size={20} />
          </span>
        </div>
      </div>
    </aside>
  );
};

export default SideMenu;
