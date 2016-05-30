class Graphs::BuildController < ApplicationController
  include Wicked::Wizard

  # steps :add_patient, :add_entries, :add_confirmation

  steps :add_patient, :add_entries, :add_interventions, :add_confirmation

  def show
    @graph = Graph.find(params[:graph_id])
    render_wizard
  end

  def new
    @graph = Graph.new
  end

  def update
    @graph = Graph.where(user_id: params[graph][:user_id]).where(type: params[:type]).where(status: 'active').first
    unless @graph.nil?
      Graph.find(params[:graph_id]).destroy
      redirect_to wizard_path(steps.second, :graph_id => @graph.id) and return
    end
    @graph = Graph.find(params[:graph_id])
    params[graph][:status] = step.to_s
    params[graph][:status] = 'active' if step == steps.last
    @graph.update_attributes(graph_params)
    respond_to do |format|
      format.html {render_wizard @graph}
      format.js {}
    end
  end

  def create
    @graph = Graph.create(graph_params)
    redirect_to wizard_path(steps.first, :graph_id => @graph.id)
  end

  protected
    def finish_wizard_path
      # byebug
      # root_url
      graph_path(params[:graph_id])
    end

  private
    def graph
      params[:type].nil? ? :graph : params[:type].underscore.to_sym
    end

    def graph_params
      params.require(graph).permit(
        :type, :user_id, :status,
        interventions_attributes: [:start,:end,:title,:description,:index,:type,:chart_type],
        entries_attributes: [:date,:value,:symbol, :user_id])
    end
end
