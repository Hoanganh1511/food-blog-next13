"use client";

import { NextStudio } from "next-sanity/studio";

import config from "../../../blog-next13-ver2/sanity.config";

export function Studio() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={config} />;
}
