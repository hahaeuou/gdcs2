CMS.registerEditorComponent({
  id: "callout",
  label: "Callout",
  fields: [
    { name: 'context', label: 'Context', widget: 'string', default: 'note' },
    { name: 'title', label: 'Title', widget: 'string' },
    { name: 'icon', label: 'Icon', widget: 'string', default: 'outline/info-circle' },
    { name: 'body', label: 'Content', widget: 'markdown', required: false }
  ],

  pattern: /{{< callout context="(\S+)" title="([\s\S]+?)" icon="(\S+)" >}}([\s\S]+?){{< \/callout >}}/s,

  fromBlock: function(match) {
    return {
      context: match[1],
      title: match[2],
      icon: match[3],
      body: match[4]
    };
  },

  toBlock: function(data) {
    return `{{< callout context="${data.context}" title="${data.title}" icon="${data.icon}" >}}\n${data.body}\n{{< /callout >}}`;
  },
});