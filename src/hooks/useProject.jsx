import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BASE_URL, TOKEN_KEY } from "../utils/constant";
import { myContext } from "./MyContextProvider";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function useProject() {
  let { auth, projects, setProjects, episodes, setEpisodes } =
    useContext(myContext);
  let navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL: BASE_URL, // Replace with your API base URL
  });

  axiosInstance.interceptors.request.use(
    (config) => {
      const token = Cookies.get(TOKEN_KEY); // Retrieve the token from cookies
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Set the Authorization header
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  async function getAllProjects() {
    try {
      const response = await axiosInstance.get(
        `/api/projects/allProject/${auth.username}`
      );
      setProjects((prev) => [...response.data[0].projects]);
      console.log(response,'from getallprojects')
      if (response.data?.projects?.length) navigate("/projects");
    } catch (err) {
      console.log(err.message);
    }
  }

  async function createProject(data) {
    try {
      const response = await axiosInstance.post(`/api/projects`, data);
      if (response.status == 201) {
        setProjects((prev) => [...prev, response.data]);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getAllEpisodes(id) {
    try {
      const response = await axiosInstance.get(
        `/api/projects/allEpisodes/${id}`
      );
      setEpisodes((prev) => response.data.episodes);
      //   return response.data;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function addEpisode(id, data) {
    try {
      const response = await axiosInstance.post(
        `/api/projects/${id}/episodes`,
        data
      );
      if (response.data) setEpisodes((prev) => [...prev, response.data]);
    } catch (err) {
      console.log(err.message);
    }
  }

  async function getEpisodeContent(id) {
    try {
      const response = await axiosInstance.get(`/api/projects/episode/${id}`);
      return response.data?.content;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function deleteEpisode(episodeId, projectId) {
    try {
      const response = await axiosInstance.delete(
        `/api/projects/${projectId}/episodes/${episodeId}`
      );
      if (response.status == 200) {
         setEpisodes(prev=>[...prev.filter((ele)=>ele._id!=episodeId)])
      }
      else return false;
    } catch (err) {
      console.log(err.message);
    }
  }

  async function updateContent(id, content) {
    let data = { content };
    try {
      const response = await axiosInstance.put(
        `/api/projects/episode/${id}`,
        data
      );
      if (response.status == 200) return true;
      else return false;
    } catch (err) {
      console.log(err.message);
    }
  }

  return {
    getAllProjects,
    createProject,
    getAllEpisodes,
    addEpisode,
    getEpisodeContent,
    updateContent,
    deleteEpisode,
  };
}

export default useProject;