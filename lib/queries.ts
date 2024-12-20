import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY=defineQuery(`*[_type=="startup"&& defined(slug.current)] |order(_createdAt desc){
  _id,
  title,
  slug,
  _createdAt,
  description,
  views,
    category,
    image,
    author->{
      _id,name,username,image,bio
    }
}
`)