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
      <div class="bg-green-700 p-10 m-10 justify-around rounded-2xl items-center">
        {clientCard}
      </div>
      <NewClientForm addNewClient={addNewClient} />
    </div>
  );
}

export default ClientListPage;
