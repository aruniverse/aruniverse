import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';

const commonFields = {
  title: {
    type: 'string',
    description: 'The title of the post',
    required: true,
  },
  date: {
    type: 'string',
    description: 'The date of the post',
    required: true,
  },
  // tags: {
  //   type: 'list',
  // },
};

const computedFields = {
  slug: {
    type: 'string',
    resolve: (file) => file._raw.sourceFileName.replace(/\.mdx?$/, ''),
  },
};

const Projects = defineDocumentType(() => ({
  name: 'Projects',
  filePathPattern: 'projects/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...commonFields,
  },
  computedFields,
}));

const Blogs = defineDocumentType(() => ({
  name: 'Blogs',
  filePathPattern: 'blogs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    ...commonFields,
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Projects, Blogs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeHighlight,
      rehypeSlug,
      rehypeCodeTitles,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
