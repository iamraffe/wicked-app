class Graphs::BuildController < ApplicationController
  include Wicked::Wizard

  steps :add_patient, :add_entries, :add_interventions, :add_confirmation

  def show
    @graph = Graph.find(params[:graph_id])
    case step
    when :add_patient
      # @graph.becomes(Graph)
      @graph.build_user
    end
    render_wizard
  end

  def new
    @graph = Graph.new
  end

  def update
    @graph = Graph.find(params[:graph_id])
    params[graph][:status] = step.to_s
    params[graph][:status] = 'active' if step == steps.last
    @graph.update_attributes(graph_params)
    render_wizard @graph
  end

  def create
    @graph = Graph.create(graph_params)
    redirect_to wizard_path(steps.first, :graph_id => @graph.id)
  end

  private
    def graph
      params[:type].nil? ? 'graph'.to_sym : params[:type].underscore.to_sym
    end

    def graph_params
      params.require(graph).permit(
        :type, :user_id, :status,
        interventions_attributes: [:start,:end,:title,:description,:index,:type,:chart_type,:id],
        entries_attributes: [:date,:value,:symbol,:id])
    end
end
