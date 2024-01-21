import type { Schema, Attribute } from '@strapi/strapi';

export interface DescriptionJobDescription extends Schema.Component {
  collectionName: 'components_description_job_descriptions';
  info: {
    displayName: 'job_description';
    icon: 'archive';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
  };
}

export interface DescriptionStackItem extends Schema.Component {
  collectionName: 'components_description_stack_items';
  info: {
    displayName: 'stack_item';
    icon: 'arrowRight';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'description.job-description': DescriptionJobDescription;
      'description.stack-item': DescriptionStackItem;
    }
  }
}
