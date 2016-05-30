module FormHelper
  def errors_for(form, field)
    content_tag(:p, form.object.errors[field].try(:first).try(:capitalize), class: "help-block")
  end

  def form_group_for(form, field, opts={}, &block)
    label = opts.fetch(:label) { true }
    has_errors = form.object.errors[field].present?

    content_tag:div, class: "form-group #{'has-error' if has_errors}" do
      concat form.label(field, class: "control-label") if label
      concat capture(&block)
      concat errors_for(form, field)
    end
  end

  def graph_patient(graph)
    graph.build_user if graph.user.nil?
    graph
  end

  def graph_entries(graph)
    5.times { graph.entries.build({user_id: graph.user.id, symbol: graph.type.upcase}) } if graph.entries.empty?
    graph
  end

  def graph_interventions(graph)
    graph.interventions.build({user_id: graph.user.id, type: "Medication"})
    graph
  end
end
