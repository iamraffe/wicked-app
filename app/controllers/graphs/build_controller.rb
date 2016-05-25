class Graphs::BuildController < ApplicationController
  include Wicked::Wizard
  steps :add_patient, :add_entries, :add_interventions, :add_confirmation

  private
    def graph_params
      params.require(:graph).permit(
        :type,
        patient_attributes: [:id, :full_name],
        interventions_attributes: [:start,:end,:title,:description,:index,:type,:chart_type,:id],
        entries_attributes: [:date,:value,:symbol,:id])
    end
end
