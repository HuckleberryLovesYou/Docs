import { PageLayout, SharedLayout } from "./quartz/cfg";
import * as Component from "./quartz/components";

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
};

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // Component.ConditionalRender({
    //   component: Component.Breadcrumbs(),
    //   condition: (page) => page.fileData.slug !== "index",
    // }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.Logo(),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      sortFn: (a: any, b: any) => {
        const nameOrderMap: Record<string, number> = {
          Home: 0,
          Leistungsnachweise: 100,
          LICENSE: 200,
          CONTRIBUTING: 300,
        };

        let orderA = 500;
        let orderB = 500;

        if (a.file && a.file.frontmatter && a.file.frontmatter.order) {
          orderA = a.file.frontmatter.order;
        } else if (a.displayName in nameOrderMap) {
          orderA = nameOrderMap[a.displayName];
        }

        if (b.file && b.file.frontmatter && b.file.frontmatter.order) {
          orderB = b.file.frontmatter.order;
        } else if (b.displayName in nameOrderMap) {
          orderB = nameOrderMap[b.displayName];
        }

        if (orderA !== orderB) {
          return orderA - orderB;
        }

        if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
          // Sort alphabetically
          return a.displayName.localeCompare(b.displayName, undefined, {
            numeric: true,
            sensitivity: "base",
          });
        }

        if (!a.isFolder && b.isFolder) {
          return 1;
        } else {
          return -1;
        }
      },
    }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
};

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.Logo(),
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
    }),
  ],
  right: [],
};
