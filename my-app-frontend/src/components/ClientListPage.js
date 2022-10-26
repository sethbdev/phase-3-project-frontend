import React from "react";
import ClientCard from "./ClientCard";
import NewClientForm from "./NewClientForm";

function ClientListPage({
  clients,
  appointments,
  updateAppointment,
  deleteAppointment,
  addNewClient,
}) {
  const clientCard = clients.map((client) => {
    return (
      <ClientCard
        name={`${client.first_name} ${client.last_name}`}
        appointments={appointments}
        key={client.id}
        clientId={client.id}
        updateAppointment={updateAppointment}
        deleteAppointment={deleteAppointment}
      />
    );
  });
  return (
    <div>
      {clientCard}
      <NewClientForm addNewClient={addNewClient} />
    </div>
  );
}

export default ClientListPage;
