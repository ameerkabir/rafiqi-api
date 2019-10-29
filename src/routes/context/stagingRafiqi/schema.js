import { Schema, model } from 'mongoose';
const StagingOpportunities = new Schema(
  {
    opportunity_name: {
      type: String,
      required: 'Opportunity name can not be empty',
      trim: true
    },
    category: {
      type: String,

      trim: true
    },

    mode_of_delivery: {
      type: String,

      trim: true
    },
    theme: {
      type: String,

      trim: true
    },

    country: {
      type: String,

      trim: true
    },

    city: {
      type: String,

      trim: true
    },
    level: {
      type: String,

      trim: true
    },
    duration: {
      type: String,

      trim: true
    },
    full_or_part: {
      type: String,
      trim: true
    },
    info: {
      type: String,
      trim: true
    },
    comments: {
      type: String,
      trim: true
    },
    cluster_nb: {
      type: String,
      trim: true
    },
    local_lan_requirements: {
      type: String,
      trim: true
    },
    en_requirements: {
      type: String,
      trim: true
    }
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

const StagingOpportunitiesModel = model('StagingOpportunities', StagingOpportunities);
export default StagingOpportunitiesModel;
