import  { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { editProject, getProject } from "~/api/projects";

const EditProject = () => {
  const [dataSubmit, setDataSubmit] = useState({});
  const [techValue, setTechValue] = useState("");
  const [fileImg, setFileImg] = useState();
  const [techs, setTechs] = useState(new Set([]));
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const data = await getProject(id);
        setDataSubmit(data.data);
        setTechs(data.data.techs);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    setDataSubmit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChangeTech = (e) => {
    setTechValue(e.target.value);
  };
  const handleChangeImg = (e) => {
    setDataSubmit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFileImg(Array.from(e.target.files)[0]);
  };
  const handleAddTech = () => {
    setTechValue("");
    setTechs(techs.add(techValue));
  };
  const handleRemoveTech = (tech) => {
    const arrTech = Array.from(techs).filter((item) => item !== tech);
    setTechs(new Set(arrTech));
  };
  const sendData = async (data) => {
    try {
      let img = "";
      fileImg ? (img = await uploadImage(fileImg)) : (img = data.img);
      await editProject({ ...data, img: img });
      navigate("/admin/projects");
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const arrTech = Array.from(techs);
    sendData({ ...dataSubmit, techs: arrTech });
  };
  return (
    <div className="m-auto w-3/4 flex flex-col items-center gap-4">
      <h2 className="text-lg">Edit Project</h2>
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-4 w-full"
      >
        <input
          className="border border-gray-400 w-full p-3"
          type="text"
          placeholder="Name"
          name="name"
          value={dataSubmit.name || ""}
          onChange={handleOnChange}
          required
        />
        <textarea
          className="border border-gray-400 w-full p-3"
          type="text"
          placeholder="Desc"
          name="desc"
          value={dataSubmit.desc || ""}
          onChange={handleOnChange}
          required
        />
        <input
          className="border border-gray-400 w-full p-3"
          type="file"
          placeholder="Image"
          name="img"
          onChange={handleChangeImg}
          multiple
        />
        <div className="w-full">
          <p className="text-sm text-gray-500">Add some tech...</p>
          <div className="border flex p-3 gap-2">
            {Array.from(techs).map((tech, index) => (
              <div
                key={index}
                className="min-w-[10%] flex justify-center items-center gap-2 border border-red-400"
              >
                <p className="text-sm">{tech}</p>
                <button
                  onClick={() => handleRemoveTech(tech)}
                  className="text-sm rounded-full w-3 h-3 bg-red-400 text-white flex justify-center items-center"
                >
                  x
                </button>
              </div>
            ))}
          </div>
          <div className="flex justify-start gap-2 w-full mt-3">
            <input
              type="text"
              className="border border-gray-400 p-3"
              placeholder="Tech"
              onChange={handleChangeTech}
              value={techValue}
            />
            <button
              type="button"
              className="px-3 py-2 bg-green-300"
              onClick={handleAddTech}
            >
              Add
            </button>
          </div>
        </div>
        <input
          className="border border-gray-400 w-full p-3"
          type="text"
          placeholder="Github"
          name="github"
          value={dataSubmit.github || ""}
          onChange={handleOnChange}
          required
        />
        <input
          className="border border-gray-400 w-full p-3"
          type="text"
          placeholder="Host"
          name="host"
          value={dataSubmit.host || ""}
          onChange={handleOnChange}
          required
        />

        <button className="hover:bg-red-100 px-5 py-3 rounded-sm text-red-400 border border-2 border-red-400">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProject;
