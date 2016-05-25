class Graphs::BuildController < ApplicationController
  include Wicked::Wizard

  steps :add_patient, :add_entries, :add_interventions, :add_confirmation

  def show
    @graph = Graph.find(params[:graph_id])
    render_wizard
  end

  def new
    @graph = Graph.new
  end

  def update
    @graph = Graph.find(params[:graph_id])
    byebug
    params[:graph][:status] = step.to_s
    params[:graph][:status] = 'active' if step == steps.last
    @graph.update_attributes(params[:graph])
    render_wizard @graph
  end

  def create
    @graph = Graph.create(graph_params)
    redirect_to wizard_path(steps.first, :graph_id => @graph.id)
  end

  private
    def graph_params
      params.require(:graph).permit(
        :type,
        patient_attributes: [:id, :full_name],
        interventions_attributes: [:start,:end,:title,:description,:index,:type,:chart_type,:id],
        entries_attributes: [:date,:value,:symbol,:id])
    end
end
